# Jobs

## Create Job

POST /api/jobs

Expected:
201 Created

---

## Update Job

PATCH /api/jobs/:id

Expected:
200 OK

# Company

## Get Company

GET /api/company

Expected:  
200 OK
{
success: true,
data: Company
}

---

## Update Company

PATCH /api/company

Expected:
200 OK
{
success: true,
data: Company
}
