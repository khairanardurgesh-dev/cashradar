# CashRadar Product Specification

## Working tagline

Find where your cash is stuck.

## Core promise

Upload your receivables Excel/CSV and immediately understand:

- How much cash is outstanding.
- How much is overdue.
- Which customers have the largest exposure.
- Which invoices deserve attention first.
- What is due in the next 7/30/60 days.
- How old outstanding receivables are.
- Which customers historically pay late.

## V1 workflow

Business uploads Excel/CSV
        ↓
CashRadar validates the data
        ↓
CashRadar cleans the data
        ↓
CashRadar calculates receivables metrics
        ↓
CashRadar identifies collection priorities
        ↓
CashRadar displays the dashboard

## Supported input

Initially:

- CSV
- XLSX

Expected fields:

- Invoice Number
- Customer Name
- Invoice Date
- Due Date
- Amount
- Payment Status
- Paid Date

Optional future fields:

- Payment Terms
- Currency
- PO Number

## V1 features

### Authentication

- Sign up
- Login
- Logout

### Organization

- Create business
- Select business
- Organization-level data isolation

### Upload

- Upload CSV/XLSX
- Detect columns
- Map columns
- Validate rows
- Report errors
- Import valid data

### Analytics

- Total outstanding
- Total overdue
- Days overdue
- Aging buckets
- Customer exposure
- Historical payment delay
- Due amounts
- Basic cash forecast

### Priority engine

Rank receivables using transparent, explainable metrics.

Potential factors:

- Days overdue
- Outstanding amount
- Historical payment delay
- Customer exposure
- Aging severity

The scoring formula must be tested before being finalized.

Every priority result must explain why it received its classification.

Example:

HIGH PRIORITY

Reasons:

- Invoice is 20 days overdue.
- ₹18.4L remains outstanding.
- Customer historically pays 37 days late.
- Customer represents 24% of outstanding receivables.

## V1 exclusions

Do not build:

- Lending
- Invoice financing
- Financing marketplace
- TReDS operation
- Payment processing
- Wallets
- Escrow
- Bank integrations
- Debt collection services
- Credit approval
- Guaranteed payment predictions

## Long-term possibilities

After the core product is stable:

- Accounting integrations
- Payment reminders
- Reporting
- AI-generated explanations
- Benchmarking
- Financing-readiness intelligence
- TReDS-related informational features