/**
 * config.js
 * Express Example. Created by Aditya Gannavarapu (https://github.com/aditya-67)
 */

"use strict";

// Load environment variables from the `.env` file.
require("dotenv").config();

module.exports = {
  port: process.env.PORT || 5000,
  api_url: process.env.API_URL,
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  JWT_secret:process.env.JWT_SECRET,
  mongodb_secret:process.env.MDB_SECRET,
  fiData : {
    TERM_DEPOSIT: {
      "type": "term_deposit",
      "masked_account_number": "XXXXXXX123",
      "link_ref_number": "123456789",
      "profile": {
        "holders": {
          "holder": [{
            "address": "4/1290, 785th Cross, 13rd Main, 7th Block, Bangalore - 569911",
            "ckycCompliance": "true",
            "dob": "24-07-1970",
            "email": "ram.sapan@gmail.com",
            "landline": "",
            "mobile": "91729391923",
            "name": "Ramkrishna Sapan",
            "nominee": "REGISTERED",
            "pan": "AAAPL1234C"
          }]
        }
      },
      "summary": {
        "accountType": "FIXED",
        "branch": "Jayanagar 7th Block",
        "compoundingFrequency": "HALF-YEARLY",
        "currentValue": "119845.90",
        "description": "",
        "ifsc": "APNB0001154",
        "interestComputation": "COMPOUND",
        "interestOnMaturity": "",
        "interestPayout": "HALF-YEARLY",
        "interestPeriodicPayoutAmount": "",
        "interestRate": "2",
        "maturityAmount": "10.0",
        "maturityDate": "12-11-2021",
        "openingDate": "06-08-2019",
        "principalAmount": "109890.98",
        "recurringAmount": "2453",
        "recurringDepositDay": "06-08-2019",
        "tenureDays": "180",
        "tenureMonths": "6",
        "tenureYears": "0.5"
      },
      "transactions": {
        "endDate": "",
        "startDate": "",
        "transaction": [{
          "amount": "1239",
          "currentBalance": "62289.25",
          "mode": "UPI",
          "narration": "UPI/935314560764/getsimpl/simpl@axisbank/Axis Bank",
          "reference": "RFN0TD0013383",
          "transactionTimestamp": "2021-04-01T13:20:14+05:30",
          "txnId": "TD3258741",
          "type": "DEBIT",
          "valueDate": "2021-04-01"
        }]
      }
    },
    RECCURING_DEPOSIT: {
      "type": "recurring_deposit",
      "masked_account_number": "XXXXXXX123",
      "link_ref_number": "123456789",
      "profile": {
        "holders": {
          "holder": [{
            "address": "4/1290, 785th Cross, 13rd Main, 7th Block, Bangalore - 569911",
            "ckycCompliance": "true",
            "dob": "24-07-1970",
            "email": "ram.sapan@gmail.com",
            "landline": "",
            "mobile": "91729391923",
            "name": "Ramkrishna Sapan",
            "nominee": "REGISTERED",
            "pan": "AAAPL1234C"
          }],
          "type": "JOINT"
        }
      },
      "summary": {
        "accountType": "FIXED",
        "branch": "Jayanagar 7th Block",
        "compoundingFrequency": "HALF-YEARLY",
        "currentValue": "119845.90",
        "description": "",
        "ifsc": "APNB0001154",
        "interestComputation": "COMPOUND",
        "interestOnMaturity": "",
        "interestPayout": "HALF-YEARLY",
        "interestPeriodicPayoutAmount": "",
        "interestRate": "2",
        "maturityAmount": "10.0",
        "maturityDate": "12-11-2021",
        "openingDate": "06-08-2019",
        "principalAmount": "109890.98",
        "recurringAmount": "2453",
        "recurringDepositDay": "06-08-2019",
        "tenureDays": "180",
        "tenureMonths": "6",
        "tenureYears": "0.5"
      },
      "transactions": {
        "endDate": "",
        "startDate": "",
        "transaction": [{
          "amount": "1239",
          "currentBalance": "62289.25",
          "mode": "UPI",
          "narration": "UPI/935314560764/getsimpl/simpl@axisbank/Axis Bank",
          "reference": "RFN0RD0013383",
          "transactionTimestamp": "2021-04-01T13:20:14+05:30",
          "txnId": "RD3258741",
          "type": "DEBIT",
          "valueDate": "2021-04-01"
        }]
      }
    },
    CREDIT_CARD: {
      "type": "credit_card",
      "masked_account_number": "XXXXXXX123",
      "link_ref_number": "123456789",
      "profile": {
        "holders": {
          "holder": {
            "cards": {
              "card": [{
                "cardType": "RUPAY",
                "issuedDate": "12-04-2006",
                "maskedCardNumber": "4321-XXXXXXXX-9876",
                "primary": "YES"
              }]
            },
            "ckycCompliance": "true",
            "dob": "24-07-1970",
            "email": "ram.sapan@gmail.com",
            "mobile": "91729391923",
            "name": "Ramkrishna Sapan",
            "nominee": "REGISTERED",
            "pan": "AAAPL1234C"
          }
        }
      },
      "summary": {
        "availableCredit": "51345",
        "cashLimit": "20000",
        "creditLimit": "60000",
        "currentDue": "3000",
        "dueDate": "20-06-2021",
        "financeCharges": "2368",
        "lastStatementDate": "20-05-2021",
        "loyaltyPoints": "2450",
        "minDueAmount": "1346",
        "previousDueAmount": "7654",
        "totalDueAmount": "9756"
      },
      "transactions": {
        "endDate": "",
        "startDate": "",
        "transaction": [{
          "amount": "1239",
          "maskedCardNumber": "4321-XXXXXXXX-9876",
          "mcc": "RFN0RD0013383",
          "narration": "UPI/935314560764/getsimpl/simpl@axisbank/Axis Bank",
          "statementDate": "20-04-2021",
          "txnDate": "2021-04-01T13:20:14+05:30",
          "txnId": "RD3258741",
          "txnType": "DEBIT",
          "valueDate": "2021-04-01"
        }]
      }
    },
    CD: {
      "type": "cd",
      "masked_account_number": "XXXXXXX123",
      "link_ref_number": "123456789",
      "profile": {
        "holders": {
          "holder": {
            "ckycCompliance": "true",
            "dematId": "Y68HS92S09S",
            "dob": "24-07-1980",
            "email": "manisha.34@gmail.com",
            "mobile": "91729391923",
            "name": "Manisha Vijayakumar",
            "nominee": "REGISTERED",
            "pan": "BYHPL1234T"
          }
        }
      },
      "summary": {
        "currentValue": "213000",
        "holdings": {
          "holding": {
            "companyName": "Deposits Registry Ltd.",
            "description": "",
            "faceValue": "230000",
            "isin": "DRL893455",
            "issueDate": "2021-02-12",
            "issuerName": "Mukesh Y",
            "lastTradedDate": "2021-04-12",
            "lastTradedRate": "2",
            "maturityDate": "2024-02-12",
            "scheme": "TERM",
            "symbol": "",
            "tenureDays": "120",
            "tenureMonths": "36",
            "tenureYears": "3",
            "yield": "6"
          },
          "type": "CD"
        },
        "investmentValue": "200000"
      },
      "transactions": {
        "endDate": "",
        "startDate": "",
        "transaction": [{
          "currency": "INR",
          "isin": "DRL893455",
          "narration": "",
          "otherTaxes": "34",
          "rate": "15000",
          "stt": "23",
          "totalCharge": "2450",
          "tradeValue": "1345",
          "transactionDateTime": "2021-01-12T13:20:00-05:00",
          "txnId": "CDR9084JED",
          "type": "BUY",
          "units": "1"
        }]
      }
    },
    IDR: {
      "type": "idr",
      "masked_account_number": "XXXXXXX123",
      "link_ref_number": "123456789",
      "profile": {
        "holders": {
          "holder": {
            "ckycCompliance": "true",
            "dob": "24-07-1970",
            "email": "ram.sapan@gmail.com",
            "mobile": "91729391923",
            "name": "Ramkrishna Sapan",
            "nominee": "REGISTERED",
            "pan": "AAAPL1234C"
          }
        }
      },
      "summary": {
        "currentValue": "23459.0",
        "investment": {
          "holdings": {
            "holding": {
              "description": "",
              "investmentDateTime": "2021-04-12T13:20:00-05:00",
              "isin": "APNDR",
              "issuerName": "APNA Depository Receipts",
              "lastTradedPrice": "70",
              "rate": "6",
              "units": "30"
            },
            "type": "DEMAT"
          }
        },
        "investmentValue": "12000.0"
      },
      "transactions": {
        "endDate": "",
        "startDate": "",
        "transaction": [{
          "companyName": "",
          "exchange": "BSE",
          "isin": "INUS-000402625-0",
          "narration": "",
          "orderId": "ORD98703245",
          "otherCharges": "109",
          "rate": "8",
          "shareHolerEquityType": "COMMON-STOCK",
          "symbol": "",
          "totalCharge": "100",
          "tradeId": "TIDR76TY90",
          "tradeValue": "109",
          "transactionDateTime": "2021-04-12T13:20:00-05:00",
          "txnId": "M59555532",
          "type": "BUY",
          "units": "10"
        }]
      }
    },
    INSURANCE_POLICIES: {
      "type": "insurance_policies",
      "masked_account_number": "XXXXXXX123",
      "link_ref_number": "123456789",
      "profile": {
        "holders": {
          "holder": [{
            "ckycCompliance": "true",
            "dob": "24-07-1980",
            "email": "manisha.34@gmail.com",
            "mobile": "91729391923",
            "name": "Manisha Vijayakumar",
            "nominee": "REGISTERED",
            "pan": "BYHPL1234T",
            "rank": "1"
          }],
          "type": "JOINT"
        },
        "riders": {
          "rider": [{
            "policyEndDate": "12-03-2033",
            "policyStartDate": "12-03-2021",
            "premiumAmount": "1600000",
            "riderType": "Waiver of premium",
            "sumAssured": "1500000",
            "tenureMonths": "144",
            "tenureYears": "12"
          }]
        }
      },
      "summary": {
        "contractClauses": {
          "contractClause": [{
            "amount": "75000",
            "conditions": "",
            "description": "",
            "exlcusions": "",
            "subLimit": "",
            "title": "Children Plan"
          }]
        },
        "coverAmount": "1300000",
        "coverType": "BUILDING",
        "covers": {
          "cover": [{
            "amount": "120000",
            "description": ""
          }]
        },
        "eiaNumber": "TY67HG5THL",
        "maturityBenefit": "",
        "maturityDate": "2004-04-12",
        "moneyBacks": {
          "moneyBack": [{
            "amount": "1000",
            "date": "12-03-28",
            "description": ""
          }]
        },
        "policyName": "APNA Life Insurance",
        "policyNumber": "APNI789008",
        "policyStartDate": "12-03-2021",
        "policyType": "CHILDREN_PLAN",
        "premiumAmount": "1600000",
        "premiumFrequency": "HALF_YEARLY",
        "premiumPaymentMonths": "24",
        "premiumPaymentYears": "2",
        "sumAssured": "1500000",
        "tenureMonths": "144",
        "tenureYears": "12"
      },
      "transactions": {
        "endDate": "",
        "startDate": "",
        "transaction": [{
          "amount": "5000",
          "narration": "BIL/BPAY/001982030055/BSE ISIP/BSE000000034260 ",
          "txnDate": "2021-05-09T18:33:56+05:30",
          "txnId": "M69761383",
          "type": "BONUS"
        }]
      }
    },
    ULIP: {
      "type": "ulip",
      "masked_account_number": "XXXXXXX123",
      "link_ref_number": "123456789",
      "profile": {
        "holders": {
          "type": "JOINT",
          "holder": {
            "ckycCompliance": "true",
            "dob": "24-07-1980",
            "email": "manisha.34@gmail.com",
            "mobile": "91729391923",
            "name": "Manisha Vijayakumar",
            "nominee": "REGISTERED",
            "pan": "BYHPL1234T",
            "dematId": "A8SD39DSD"
          }
        },
        "riders": {
          "rider": {
            "riderType": "Waiver of premium",
            "sumAssured": "1000",
            "tenureYears": "2",
            "tenureMonths": "24",
            "policyStartDate": "2021-01-12",
            "policyEndDate": "2023-01-12",
            "premiumAmount": "200000",
            "description": ""
          }
        }
      },
      "summary": {
        "type": "HEALTH",
        "productName": "HEALTH INSURANCE",
        "productDescription": "",
        "sumAssured": "209000",
        "tenureYears": "2",
        "tenureMonths": "24",
        "premiumAmount": "100",
        "policyStartDate": "2021-01-12",
        "policyMaturityDate": "2023-01-12",
        "premiumFrequency": "HALF_YEARLY",
        "premiumPaymentYears": "1",
        "premiumPaymentMonths": "12",
        "nextPremiumDueDate": "2021-01-12",
        "holdings": {
          "holding": {
            "name": "APNA Insurance",
            "type": "BALANCED",
            "units": "2",
            "cost": "200",
            "nav": "",
            "allocationPercentage": "4",
            "premiumAllocation": "5",
            "currentValue": "2090",
            "description": ""
          }
        }
      },
      "transactions": {
        "endDate": "",
        "startDate": "",
        "transaction": [{
          "txnDate": "2021-01-09T18:33:56+05:30",
          "txnId": "M69761383",
          "fundName": "",
          "units": "2",
          "nav": "10",
          "navDate": "2021-04-12",
          "cost": "1000",
          "premium": "200",
          "premiumAllocationCharge": "20",
          "otherCharges": "10",
          "type": "CHANGES_IN_MATURITY_DATE",
          "narration": ""
        }]
      }
    },
    EPF: {
      "type": "epf",
      "masked_account_number": "XXXXXXX123",
      "link_ref_number": "123456789",
      "profile": {
        "holders": {
          "holder": {
            "ckycCompliance": "true",
            "dob": "24-07-1989",
            "email": "gpatel.1234@gmail.com",
            "mobile": "91729391923",
            "name": "Gurmeet Patel",
            "nominee": "REGISTERED",
            "pan": "BTHPL6749C"
          }
        }
      },
      "summary": {
        "currentBalance": "280000",
        "employeeBalance": "100000",
        "employerBalance": "200000",
        "establishmentId": "ISI-PS-23943",
        "establishmentName": "Public Services Ltd.",
        "openingDate": "2011-01-12",
        "totalBalance": "300300"
      },
      "transactions": {
        "endDate": "",
        "startDate": "",
        "transaction": [{
          "employeeDepositAmount": "1239",
          "employeeWithdrawalAmount": "500",
          "employerDepositAmount": "1000",
          "employerWithdrawalAmount": "100",
          "narration": "UPI/935314560764/getsimpl/simpl@axisbank/Axis Bank",
          "pensionFundAmount": "62289.25",
          "txnDate": "2021-04-01T13:20:14+05:30",
          "txnId": "M3258741",
          "type": "ADJUSTMENT"
        }]
      }
    },
    PPF: {
      "type": "ppf",
      "masked_account_number": "XXXXXXX123",
      "link_ref_number": "123456789",
      "profile": {
        "holders": {
          "holder": [{
            "ckycCompliance": "true",
            "dob": "24-07-1985",
            "email": "avinash.mishra@gmail.com",
            "mobile": "91729391923",
            "name": "Avinash Mishra",
            "nominee": "REGISTERED",
            "pan": "AAAPL6789C"
          }],
          "type": "JOINT"
        }
      },
      "summary": {
        "branchAddr": "",
        "currenBalance": "1000000",
        "ifscCode": "APNB0001154",
        "maturityDate": "2021-12-12",
        "micrCode": "500245646",
        "openingDate": "2021-01-01",
        "status": "ACTIVE"
      },
      "transactions": {
        "endDate": "",
        "startDate": "",
        "transaction": [{
          "amount": "1239",
          "balance": "62289.25",
          "narration": "UPI/935314560764/getsimpl/simpl@axisbank/Axis Bank",
          "txnDate": "2021-04-01T13:20:14+05:30",
          "txnId": "M3258741",
          "type": "DEPOSIT",
          "valueDate": "2021-04-01"
        }]
      }
    },
    MUTUAL_FUNDS: {
      "type": "mutual_funds",
      "masked_account_number": "XXXXXXX123",
      "link_ref_number": "123456789",
      "profile": {
        "holders": {
          "holder": {
            "address": "8/1492, 765th Cross, 12th Main, 18th Block, Bangalore - 569911",
            "ckycCompliance": "true",
            "dob": "24-07-1980",
            "email": "manisha.34@gmail.com",
            "landline": "",
            "mobile": "91729391923",
            "name": "Manisha Vijayakumar",
            "nominee": "REGISTERED",
            "pan": "BYHPL1234T"
          }
        }
      },
      "summary": {
        "currentValue": "156000",
        "investmentValue": "130000",
        "investment": {
          "holdings": {
            "holding": [{
              "FatcaStatus": "YES",
              "amc": "Apna Mutual Funds",
              "amfiCode": "APFMST123",
              "closingUnits": "26",
              "dividendType": "Cash",
              "folioNo": "876",
              "isin": "INUS-000402625-0",
              "lienUnits": "15",
              "lockingUnits": "12",
              "mode": "SIP",
              "nav": "512",
              "rate": "469",
              "registrar": "CAMS",
              "schemeCode": "APMFST",
              "ucc": "APMF",
              "units": "21"
            }]
          }
        }
      },
      "transactions": {
        "endDate": "",
        "startDate": "",
        "transaction": [{
          "amc": "Apna Mutual Funds",
          "amfiCode": "",
          "amount": "",
          "closingUnits": "",
          "executionDate": "2002-09-24",
          "fundType": "EQUITY",
          "isin": "INUS-000402625-0",
          "lienUnits": "",
          "lock-inDays": "",
          "lock-inFlag": "",
          "mode": "DEMAT",
          "narration": "",
          "nav": "",
          "navDate": "2020-09-24",
          "orderDate": "2002-09-24",
          "registrar": "CAMS",
          "schemeCategory": "AGGRESSIVE_HYBRID_FUND",
          "schemeCode": "APMFST",
          "schemeOption": "REINVEST",
          "schemePlan": "DIRECT",
          "schemeTypes": "DEBT_SCHEMES",
          "txnId": "M6328NDS",
          "type": "BUY",
          "ucc": ""
        }]
      }
    },
    BONDS: {
      "type": "bonds",
      "masked_account_number": "XXXXXXX123",
      "link_ref_number": "123456789",
      "profile": {
        "holders": {
          "holder": {
            "ckycCompliance": "true",
            "dematId": "Y68HS92S09S",
            "dob": "24-07-1980",
            "email": "manisha.34@gmail.com",
            "mobile": "91729391923",
            "name": "Manisha Vijayakumar",
            "nominee": "REGISTERED",
            "pan": "BYHPL1234T"
          }
        }
      },
      "summary": {
        "currentValue": "205000",
        "holdings": {
          "holding": {
            "accruedInterestAmount": "4",
            "autionDate": "2021-04-30",
            "compoundingFrequency": "HALF_YEARLY",
            "coupanComputation": "COMPOUND",
            "coupanPaymentDate": "2021-04-12",
            "couponRate": "6",
            "creditRating": "615",
            "creditRatingAgency": "CIBIL",
            "description": "",
            "faceValue": "19",
            "interestOnMaturity": "3",
            "interestPayout": "HALF_YEARLY",
            "isin": "DGRL893455",
            "issueDate": "2021-01-12",
            "issueRate": "",
            "issuerName": "Mukesh G",
            "lastTradedDate": "2021-03-12",
            "lastTradedRate": "6",
            "maturityDate": "2021-12-12",
            "principleAmount": "200000",
            "scheme": "FIXED_INTEREST_RATE",
            "symbol": "",
            "taxable": "true",
            "tenureDays": "120",
            "tenureMoths": "36",
            "tenureYears": "3",
            "units": "34"
          }
        },
        "investmentValue": "200000"
      },
      "transactions": {
        "endDate": "",
        "startDate": "",
        "transaction": [{
          "currency": "INR",
          "isin": "DRL893455",
          "narration": "",
          "otherTaxes": "34",
          "rate": "15000",
          "totalCharge": "2450",
          "tradeValue": "1345",
          "transactionDateTime": "2021-01-12T13:20:00-05:00",
          "txnId": "CDR9084JED",
          "type": "BUY",
          "units": "1"
        }]
      }
    },
    DEBENTURES: {
      "type": "debentures",
      "masked_account_number": "XXXXXXX123",
      "link_ref_number": "123456789",
      "profile": {
        "holders": {
          "holder": {
            "ckycCompliance": "true",
            "dematId": "Y68HS92S09S",
            "dob": "24-07-1985",
            "email": "sushila_rama.90@gmail.com",
            "mobile": "91729391923",
            "name": "Sushila Rama",
            "nominee": "REGISTERED",
            "pan": "BYHPL1234T"
          }
        }
      },
      "summary": {
        "currentValue": "205000",
        "holdings": {
          "holding": {
            "coupon": "",
            "creditRating": "615",
            "description": "",
            "faceValue": "19",
            "fixedIncomePortfolio": "",
            "isin": "DGRL893455",
            "issueDate": "2021-01-12",
            "issuerName": "Mukesh G",
            "lastTradedDate": "2021-04-12",
            "lastTradedRate": "2",
            "maturityDate": "2024-02-12",
            "principleAmount": "200000",
            "symbol": "",
            "taxable": "YES",
            "tenureDays": "120",
            "tenureMoths": "36",
            "tenureYears": "3",
            "units": "34",
            "yield": "6"
          }
        },
        "investmentValue": "200000"
      },
      "transactions": {
        "endDate": "",
        "startDate": "",
        "transaction": [{
          "currency": "INR",
          "isin": "DRL893455",
          "otherTaxes": "34",
          "rate": "15000",
          "totalCharge": "2450",
          "tradeValue": "1345",
          "transactionDateTime": "2021-01-12T13:20:00-05:00",
          "txnId": "CDR9084JED",
          "type": "BUY",
          "units": "1"
        }]
      }
    },
    ETF: {
      "type": "etf",
      "masked_account_number": "XXXXXXX123",
      "link_ref_number": "123456789",
      "profile": {
        "holders": {
          "holder": {
            "ckycCompliance": "true",
            "dematId": "Y68HS92S09S",
            "dob": "24-07-1985",
            "email": "sushila_rama.90@gmail.com",
            "mobile": "91729391923",
            "name": "Sushila Rama",
            "nominee": "REGISTERED",
            "pan": "BYHPL1234T"
          }
        }
      },
      "summary": {
        "investmentValue": "200000",
        "currentValue": "250000",
        "investment": {
          "holdings": {
            "holding": {
              "folioNo": "876",
              "dematId": "Y68HS92S09S",
              "schemeName": "FIXED_INTEREST",
              "dpId": "DP786TYH",
              "units": "30",
              "isin": "INUS-000402625-0",
              "mode": "DEMAT",
              "rate": "20",
              "nav": "",
              "lastNavDate": "2021-04-12",
              "symbol": "",
              "description": ""
            }
          }
        }
      },
      "transactions": {
        "endDate": "",
        "startDate": "",
        "transaction": [{
          "txnId": "HY63944T6",
          "isin": "INUS-000402625-0",
          "transactionDateTime": "2021-01-12T13:20:00-05:00",
          "units": "20",
          "amount": "3000.0",
          "schemeName": "FIXED_INTEREST",
          "dpId": "DP786TYH",
          "schemeMinLotSize": "",
          "faceValueofUnits": "40.0",
          "nav": "",
          "type": "BUY",
          "orderDate": "2021-01-12",
          "executionDate": "2021-01-12",
          "mode": "DEMAT",
          "narration": "",
        }]
      }
    },
    NPS: {
      "type": "nps",
      "masked_account_number": "XXXXXXX123",
      "link_ref_number": "123456789",
      "profile": {
        "holders": {
          "holder": {
            "ckycCompliance": "true",
            "pranId": "Y68HS92S09S",
            "dob": "24-07-1985",
            "email": "sushila_rama.90@gmail.com",
            "mobile": "91729391923",
            "name": "Sushila Rama",
            "nominee": "REGISTERED",
            "pan": "BYHPL1234T"
          }
        }
      },
      "summary": {
        "currentValue": "150000",
        "tier1NAVDate": "2021-01-12",
        "tier2NAVDate": "",
        "debtAssetValue": "100000",
        "equityAssetValue": "10000",
        "otherAssetValue": "400000",
        "openingDate": "2021-01-12",
        "status": "ACTIVE",
        "tier1Status": "ACTIVE",
        "tier2Status": "INACTIVE",
        "schemeChoices": {
          "schemeChoice": [{
            "allocationPercent": "9",
            "pfmId": "PTRG5665DS",
            "pfmName": "FELIX FM Ltd.",
            "schemeId": "FPRT78092",
            "schemeName": "INTEREST"
          }]
        },
        "holdings": {
          "tier1Holdings": {
            "schemePreferenceType": "ACTIVE",
            "freeUnits": "20",
            "investmentCost": "200000",
            "investmentValue": "180000",
            "tier1Holding": [{
              "amount": "100",
              "amountInTransition": "2000",
              "blockedUnits": "20",
              "freeUnits": "30",
              "nav": "",
              "schemeId": "FPRT78092",
              "schemeName": "INTEREST",
              "totalUnits": "300",
              "totalValueOfScheme": "350000"
            }]
          },
          "tier2Holdings": {
            "schemePreferenceType": "INACTIVE",
            "freeUnits": "",
            "investmentCost": "",
            "investmentValue": "",
            "tier2Holding": {
              "amount": "",
              "amountInTransition": "",
              "blockedUnits": "",
              "freeUnits": "",
              "nav": "",
              "schemeId": "",
              "schemeName": "",
              "totalUnits": "",
              "totalValueOfScheme": ""
            }
          }
        }
      },
      "transactions": {
        "endDate": "",
        "startDate": "",
        "tier1SchemeTransactions": {
          "tier1SchemeTransaction": [{
            "txnId": "NSD7HS93MSD",
            "txnDate": "2021-01-12",
            "type": "ADJUSTMENT",
            "narration": "",
            "schemeId": "FPRT78092",
            "schemeName": "INTEREST",
            "allocationPercent": "8",
            "amount": "1000",
            "nav": "",
            "units": "10",
            "cumulativeUnits": "14"
          }]
        },
        "tier2SchemeTransactions": {
          "tier2SchemeTransaction": {
            "txnId": "",
            "txnDate": "",
            "type": "",
            "schemeId": "",
            "schemeName": "",
            "narration": "",
            "allocationPercent": "",
            "amount": "",
            "nav": "",
            "units": "",
            "cumulativeUnits": ""
          }
        },
        "tier1InvestmentTransactions": {
          "tier1InvestmentTransaction": [{
            "txnId": "AW8934HA0A",
            "txnDate": "2021-01-12",
            "type": "CONTRIBUTION",
            "narration": "",
            "subscriberContribution": "200",
            "employerContribution": "200",
            "totalContribution": "400"
          }]
        },
        "tier2InvestmentTransactions": {
          "tier2InvestmentTransaction": {
            "txnId": "",
            "txnDate": "",
            "type": "",
            "narration": "",
            "subscriberContribution": "",
            "employerContribution": "0",
            "totalContribution": ""
          }
        }
      }
    },
    GOVT_SECURITIES: {
      "type": "govt_securities",
      "masked_account_number": "XXXXXXX123",
      "link_ref_number": "123456789",
      "profile": {
        "holders": {
          "holder": {
            "ckycCompliance": "true",
            "dematId": "Y68HS92S09S",
            "dob": "24-07-1980",
            "email": "manisha.34@gmail.com",
            "mobile": "91729391923",
            "name": "Manisha Vijayakumar",
            "nominee": "REGISTERED",
            "pan": "BYHPL1234T"
          }
        }
      },
      "summary": {
        "currentValue": "205000",
        "holdings": {
          "holding": {
            "accruedInterestAmount": "4",
            "autionDate": "2021-04-30",
            "compoundingFrequency": "HALF_YEARLY",
            "coupanComputation": "COMPOUND",
            "coupanPaymentDate": "2021-04-12",
            "couponRate": "6",
            "creditRating": "615",
            "creditRatingAgency": "CIBIL",
            "description": "",
            "faceValue": "19",
            "interestOnMaturity": "3",
            "interestPayout": "HALF_YEARLY",
            "isin": "DGRL893455",
            "issueDate": "2021-01-12",
            "issueRate": "",
            "issuerName": "Mukesh G",
            "lastTradedDate": "2021-03-12",
            "lastTradedRate": "6",
            "maturityDate": "2021-12-12",
            "principleAmount": "200000",
            "scheme": "FIXED_INTEREST_RATE",
            "symbol": "",
            "taxable": "true",
            "tenureDays": "120",
            "tenureMoths": "36",
            "tenureYears": "3",
            "units": "34"
          }
        },
        "investmentValue": "200000"
      },
      "transactions": {
        "endDate": "",
        "startDate": "",
        "transaction": [{
          "currency": "INR",
          "isin": "DRL893455",
          "narration": "",
          "otherTaxes": "34",
          "rate": "15000",
          "totalCharge": "2450",
          "tradeValue": "1345",
          "transactionDateTime": "2021-01-12T13:20:00-05:00",
          "txnId": "CDR9084JED",
          "type": "BUY",
          "units": "1"
        }]
      }
    },
    CP: {
      "type": "cp",
      "masked_account_number": "XXXXXXX123",
      "link_ref_number": "123456789",
      "profile": {
        "holders": {
          "holder": {
            "ckycCompliance": "true",
            "dematId": "Y68HS92S09S",
            "dob": "24-07-1980",
            "email": "manisha.34@gmail.com",
            "mobile": "91729391923",
            "name": "Manisha Vijayakumar",
            "nominee": "REGISTERED",
            "pan": "BYHPL1234T"
          }
        }
      },
      "summary": {
        "currentValue": "205000",
        "investment": {
          "holdings": {
            "holding": {
              "auctionDate": "2004-04-30",
              "creditRating": "615",
              "creditRatingAgency": "CIBIL",
              "currentValue": "205000",
              "description": "",
              "faceValue": "19",
              "investmentValue": "200000",
              "isin": "DGRL893455",
              "issueDate": "2021-01-12",
              "issuerName": "Mukesh G",
              "maturityDate": "2021-12-12",
              "principleAmount": "200000",
              "scheme": "FIXED_INTEREST_RATE",
              "symbol": "",
              "tenureDays": "120",
              "tenureMoths": "36",
              "tenureYears": "3",
              "units": "34"
            }
          }
        },
        "investmentValue": "200000"
      },
      "transactions": {
        "endDate": "",
        "startDate": "",
        "transaction": [{
          "currency": "INR",
          "isin": "DRL893455",
          "narration": "",
          "otherTaxes": "34",
          "rate": "15000",
          "totalCharge": "2450",
          "tradeValue": "1345",
          "transactionDateTime": "2021-01-12T13:20:00-05:00",
          "txnId": "CDR9084JED",
          "type": "BUY",
          "units": "1"
        }]
      }
    },
    REIT: {
      "type": "reit",
      "masked_account_number": "XXXXXXX123",
      "link_ref_number": "123456789",
      "profile": {
        "holders": {
          "holder": {
            "ckycCompliance": "true",
            "dematId": "Y68HS92S09S",
            "dob": "24-07-1985",
            "email": "n.chopra123@gmail.com",
            "mobile": "91729391923",
            "name": "Neeraj Chopra",
            "nominee": "REGISTERED",
            "pan": "BTYOL1234T"
          },
          "type": "JOINT"
        }
      },
      "summary": {
        "currentValue": "20.0",
        "investment": {
          "holdings": {
            "holding": {
              "description": "",
              "investmentDateTime": "2004-04-12T13:20:00-05:00",
              "isin": "",
              "issuerName": "",
              "lastClosingRate": "234.09",
              "nomineeStatus": "REGISTERED",
              "rate": "20.0",
              "totalNumberUnits": "10"
            }
          }
        },
        "investmentValue": "10.0"
      },
      "transactions": {
        "endDate": "",
        "startDate": "",
        "transaction": [{
          "exchange": "",
          "isin": "",
          "issuerName": "",
          "narration": "",
          "numUnitsTransacted": "10",
          "otherCharges": "10.0",
          "price": "100",
          "symbol": "",
          "totalCharge": "200.0",
          "tradeValue": "230.05",
          "transactionDateTime": "2021-04-12T13:20:00-05:00",
          "transactionDescription": "",
          "txnId": "",
          "unitsType": ""
        }]
      }
    },
    INVIT: {
      "type": "invit",
      "masked_account_number": "XXXXXXX123",
      "link_ref_number": "123456789",
      "profile": {
        "holders": {
          "holder": {
            "ckycCompliance": "true",
            "dematId": "Y68HS92S09S",
            "dob": "24-07-1985",
            "email": "n.chopra123@gmail.com",
            "mobile": "91729391923",
            "name": "Neeraj Chopra",
            "nominee": "REGISTERED",
            "pan": "BTYOL1234T"
          }
        }
      },
      "summary": {
        "investment": {
          "holdings": {
            "holding": {
              "description": "",
              "investmentDateTime": "2017-12-31T16:20:00-04:00",
              "isin": "",
              "issuerName": "",
              "lastClosingRate": "234.09",
              "rate": "20.0",
              "totalNumberUnits": "10"
            }
          }
        },
        "currentValue": "20.0",
        "investmentValue": "10.0"
      },
      "transactions": {
        "endDate": "",
        "startDate": "",
        "transaction": [{
          "exchange": "",
          "isin": "",
          "issuerName": "",
          "numUnitsTransacted": "10",
          "otherCharges": "10.0",
          "price": "100",
          "symbol": "",
          "totalCharge": "200.0",
          "tradeValue": "230.05",
          "transactionDateTime": "2017-12-31T16:20:00-04:00",
          "transactionDescription": "",
          "txnId": "",
          "unitsType": ""
        }]
      }
    },
    AIF: {
      "type": "aif",
      "masked_account_number": "XXXXXXX123",
      "link_ref_number": "123456789",
      "profile": {
        "holders": {
          "holder": {
            "ckycCompliance": "true",
            "dematId": "",
            "dob": "2002-09-24",
            "email": "qwgmail.com",
            "mobile": "91729391923",
            "name": "",
            "nominee": "NOT-REGISTERED",
            "pan": "AAAPL1234C"
          }
        }
      },
      "summary": {
        "currentValue": "20.0",
        "investment": {
          "holdings": {
            "holding": {
              "description": "",
              "holdingPeriod": "",
              "issuerName": "",
              "lastValuationDate": "2002-09-24",
              "mtmOnLastValuation": "200",
              "purchaseDate": "2002-09-24",
              "purchasePrice": "20.0",
              "typeOfSecurity": "LISTED-EQUITY",
              "valuationMethodology": ""
            }
          }
        },
        "investmentValue": "10.0",
        "totalNumUnitsIssued": "20"
      },
      "transactions": {
        "endDate": "",
        "startDate": "",
        "transaction": [{
          "fundFeesPaymentAmount": "10.0",
          "fundFeesPaymentDate": "2002-09-24",
          "investmentDateTime": "2004-04-12T13:20:00-05:00",
          "investmentValue": "20.0",
          "nameofAsset": "",
          "narration": "",
          "paymentInvestorAmount": "40.0",
          "paymentInvestorDate": "2002-09-24",
          "reInvestmentDate": "2002-09-24",
          "reInvestmentValue": "30.0",
          "redemptionDate": "2002-09-24",
          "redemptionValue": "23.0",
          "taxPaidDate": "2002-09-24",
          "taxPaidValue": "20.0",
          "txnId": ""
        }]
      }
    },
    SIP: {
      "type": "sip",
      "masked_account_number": "XXXXXXX123",
      "link_ref_number": "123456789",
      "profile": {
        "holders": {
          "holder": [{
            "ckycCompliance": "true",
            "dematId": "Y68HS92S09S",
            "dob": "24-07-1980",
            "email": "manisha.34@gmail.com",
            "mobile": "91729391923",
            "name": "Manisha Vijayakumar",
            "nominee": "REGISTERED",
            "pan": "BYHPL1234T"
          }],
          "type": "JOINT"
        }
      },
      "summary": {
        "currentValue": "76880",
        "folioNo": "876",
        "holdings": {
          "holding": {
            "amc": "Apna Mutual Funds",
            "amfiCode": "APFMST123",
            "amount": "3000",
            "ceasedDate": "",
            "completeInstalments": "500",
            "creationDate": "2021-01-12",
            "devidentType": "",
            "email": "manisha.34@gmail.com",
            "folioNo": "876",
            "frequency": "10",
            "holder1Name": "Manisha Vijayakumar",
            "holder2Name": "",
            "holdingType": "SOLE",
            "instalmentDay": "45",
            "isin": "INUS-000402625-0",
            "lastInstalmentDate": "2021-04-12",
            "modificationDate": "",
            "nav": "",
            "nextInstalmentDate": "2021-06-12",
            "nominee": "OTHERS",
            "pendingInstalments": "450",
            "registrar": "CAMS",
            "schemeCode": "APMFST",
            "ucc": "APMF",
            "units": "10",
            "value": "20"
          }
        },
        "investmentValue": "100000",
        "investments": {
          "investment": {
            "endDate": "2021-12-12",
            "startDate": "2021-01-12",
            "type": "SOLE"
          },
          "issueDate": "2021-01-12",
          "maturityDate": "2021-12-12",
          "type": "SOLE"
        }
      },
      "transactions": {
        "endDate": "",
        "startDate": "",
        "transaction": [{
          "amc": "",
          "amfiCode": "",
          "amount": "200",
          "cost": "600",
          "folioNo": "",
          "isin": "",
          "narration": "",
          "nav": "",
          "scheme": "",
          "stt": "",
          "txnDate": "2021-04-12T13:20:00-05:00",
          "txnId": "",
          "type": "BUY",
          "ucc": "",
          "units": ""
        }]
      }
 
    },
    EQUITIES: {
      "type": "equities",
      "masked_account_number": "XXXXXXX123",
      "link_ref_number": "123456789",
      "profile": {
        "holders": {
          "holder": [{
            "ckycCompliance": "true",
            "dematId": "Y68HS92S09S",
            "dob": "24-07-1985",
            "email": "sushila_rama.90@gmail.com",
            "mobile": "91729391923",
            "name": "Sushila Rama",
            "nominee": "REGISTERED",
            "pan": "BYHPL1234T"
          }]
        }
      },
      "summary": {
        "investment": {
          "holdings": {
            "holding": {
              "description": "",
              "investmentDateTime": "2004-04-12T13:20:00-05:00",
              "isin": "",
              "issuerName": "",
              "lastTradedPrice": "",
              "rate": "",
              "units": ""
            },
            "type": "DEMAT"
          }
        },
        "currentValue": "20.0",
        "investmentValue": "10.0"
      },
      "transactions": {
        "endDate": "",
        "startDate": "",
        "transaction": [{
          "companyName": "",
          "equityCategory": "CURRENCY_DERIVATIVES",
          "exchange": "BSE",
          "instrumentType": "OPTIONS",
          "isin": "",
          "narration": "",
          "optionType": "CALL",
          "orderId": "",
          "otherCharges": "",
          "rate": "",
          "shareHolderEquityType": "",
          "strikePrice": "700",
          "symbol": "",
          "totalCharge": "",
          "tradeValue": "",
          "transactionDateTime": "2004-04-12T13:20:00-05:00",
          "txnId": "",
          "type": "BUY",
          "units": ""
        }]
      }
    },
    CIS: {
      "type": "cis",
      "masked_account_number": "XXXXXXX123",
      "link_ref_number": "123456789",
      "profile": {
        "holders": {
          "holder": [{
            "ckycCompliance": "true",
            "dematId": "Y68HS92S09S",
            "dob": "24-07-1985",
            "email": "n.chopra123@gmail.com",
            "mobile": "91729391923",
            "name": "Neeraj Chopra",
            "nominee": "REGISTERED",
            "pan": "BTYOL1234T"
          }]
        }
      },
      "summary": {
        "currentValue": "130000.0",
        "investment": {
          "holdings": {
            "holding": {
              "closingUnits": "12",
              "folioNo": "876",
              "isin": "INUS-000402625-0",
              "mode": "DEMAT",
              "nav": "72",
              "rate": "6",
              "ucc": "",
              "units": "10"
            }
          }
        },
        "investmentValue": "100000.0"
      },
      "transactions": {
        "endDate": "",
        "startDate": "",
        "transaction": [{
          "amount": "200",
          "closingUnits": "12",
          "dividendType": "INTERIM-DIVIDENT",
          "executionDate": "2021-01-04",
          "isin": "INUS-000402625-0",
          "mode": "DEMAT",
          "narration": "",
          "nav": "150",
          "navDate": "2021-01-04",
          "orderDate": "2021-01-04",
          "schemeCode": "YSUDH83BS",
          "transactionDateTime": "2021-01-04T13:20:00-05:00",
          "txnId": "I3BSDFPS76",
          "type": "AMALGAMATION",
          "ucc": ""
        }]
      }
    }
  }
};
