# Backend Setup

This backend already includes DynamoDB wiring through `app/services/dynamodb_service.py`.
It supports two modes:

- AWS DynamoDB using `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`
- Local DynamoDB using `DYNAMODB_ENDPOINT`

## Environment variables

Copy `.env.example` to `.env` and fill in the values:

- `AWS_REGION` - AWS region for the table, for example `ap-south-1`
- `DYNAMODB_TABLE` - table name, defaults to `raawa-simulations`
- `DYNAMODB_ENDPOINT` - local endpoint such as `http://localhost:8000`
- `AWS_ACCESS_KEY_ID` - AWS access key for DynamoDB in AWS
- `AWS_SECRET_ACCESS_KEY` - AWS secret key for DynamoDB in AWS
- `OPENAI_API_KEY` - used by the LLM service layer

## AWS DynamoDB connection

1. Create a DynamoDB table named `raawa-simulations` or set `DYNAMODB_TABLE` to your preferred name.
2. Set the AWS credentials and region in `.env` or your shell environment.
3. Install dependencies with `pip install -r requirements.txt`.
4. Start the backend with `uvicorn app.main:app --reload --port 8000`.

## Local DynamoDB connection

If you want to test without AWS, run DynamoDB Local or LocalStack and set:

```env
DYNAMODB_ENDPOINT=http://localhost:8000
AWS_REGION=us-east-1
```

The backend will create the table automatically if it does not exist.

## Notes

- If `boto3` is not installed, the service falls back to an in-memory store.
- The simulation endpoints save results, refinements, and reports to DynamoDB when the resource is available.

## Docker

To run the backend with a local DynamoDB instance:

1. Copy `backend/.env.example` to `backend/.env` and fill in any needed values.
2. Start the stack from the repository root:

```bash
docker compose up --build
```

The backend will be available on `http://localhost:8000` and DynamoDB Local will be exposed on `http://localhost:8001`.
