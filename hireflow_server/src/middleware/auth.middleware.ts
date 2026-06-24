import { Request, Response, NextFunction } from "express";
import { supabase } from "../db/supabase.js";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        error: "Missing authorization header",
      });
    }

    const token = authHeader.replace("Bearer ", "");

    // Verify token with Supabase
    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data.user) {
      return res.status(401).json({
        success: false,
        error: "Invalid token",
      });
    }

    const userId = data.user.id;
    const email = data.user.email;

    // Fetch user from our DB (IMPORTANT: tenant info lives here)
    const { data: profile, error: profileError } = await supabase
      .from("users")
      .select("*")
      .eq("id", userId)
      .single();

    if (profileError || !profile) {
      return res.status(403).json({
        success: false,
        error: "User not registered in system",
      });
    }

    // Attach tenant context
    req.user = {
      id: userId,
      company_id: profile.company_id,
      role: profile.role,
      email,
    };

    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Auth middleware failed",
    });
  }
};
