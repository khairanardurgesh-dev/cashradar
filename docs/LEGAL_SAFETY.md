# CashRadar Legal & Launch Safety

## Product classification

CashRadar is a B2B business analytics SaaS.

Its primary function is to analyze receivables data supplied by the business and provide operational cash-flow insights.

CashRadar is not intended to operate as:

- A lender
- A bank
- A payment service
- A TReDS operator
- An invoice-financing platform
- A debt collection agency
- A financial adviser
- A credit-rating agency
- An investment platform
- A financial marketplace

## V1 boundaries

CashRadar V1 will:

- Accept customer-provided receivables data.
- Validate uploaded data.
- Calculate receivables metrics.
- Identify overdue invoices.
- Analyze customer exposure.
- Calculate aging.
- Analyze historical payment behavior.
- Provide transparent collection-priority indicators.
- Display cash-flow intelligence.

CashRadar V1 will NOT:

- Provide loans.
- Finance invoices.
- Approve financing.
- Match borrowers with lenders.
- Process payments.
- Hold customer funds.
- Operate wallets or escrow.
- Make lending or credit decisions.
- Guarantee payment.
- Provide debt collection services.

## Financial language

The product should use analytical and indicative language.

Preferred:

- "High collection priority"
- "Historical payment behavior indicates elevated collection risk"
- "Estimated collection"
- "Potential financing candidate"
- "Based on the information provided"

Avoid:

- "Guaranteed payment"
- "Guaranteed financing"
- "This customer will default"
- "Approved financing"
- "CashRadar will finance this invoice"

## Data principles

CashRadar should practice data minimization.

V1 should not request:

- Aadhaar
- PAN
- Bank passwords
- Card information
- UPI PIN
- OTP
- Internet banking credentials
- GST portal passwords

Customer business data must be isolated between organizations.

## Security principles

- Organization-level authorization is mandatory.
- Database Row Level Security must be used where supported.
- Uploaded files are untrusted input.
- Spreadsheet macros must never be executed.
- Environment secrets must never be committed to Git.
- Customer data must not be sold or exposed to other customers.

## Financing / TReDS boundary

Any future financing-related feature must remain informational unless the product is deliberately redesigned and professionally reviewed.

Allowed example:

"Potential financing candidate based on the information provided. Consider evaluating this receivable through an authorized financing platform."

Not allowed:

"CashRadar guarantees this invoice is eligible for financing."

"CashRadar will finance this invoice."

"CashRadar approved your financing."

## Legal review

Before commercial launch, the final:

- Privacy Policy
- Terms of Service
- Data processing terms where applicable
- Data retention policy
- Security practices
- Financing-related language

should be reviewed by an appropriately qualified Indian legal professional.

This document is a product-development safety specification, not legal advice.