const createData = (mobileNumber) => {
  const dateNow = new Date();
  const expiry = new Date(dateNow.getTime() + 600000);
  var data = JSON.stringify({
    Detail: {
      consentStart: dateNow.toISOString(),
      consentExpiry: expiry.toISOString(),
      Customer: {
        id: mobileNumber + "@onemoney",
      },
      FIDataRange: {
        from: "2021-04-01T00:00:00Z",
        to: "2021-10-01T00:00:00Z",
      },
      consentMode: "STORE",
      consentTypes: ["TRANSACTIONS", "PROFILE", "SUMMARY"],
      fetchType: "PERIODIC",
      Frequency: {
        value: 1,
        unit: "HOUR",
      },
      DataFilter: [
        {
          type: "TRANSACTIONAMOUNT",
          value: "5000",
          operator: ">=",
        },
      ],
      DataLife: {
        value: 1,
        unit: "MONTH",
      },
      DataConsumer: {
        id: "setu-fiu-id",
      },
      Purpose: {
        Category: {
          type: "string",
        },
        code: "101",
        text: "Finance Data Visualizer",
        refUri: "https://api.rebit.org.in/aa/purpose/101.xml",
      },
      fiTypes: ["DEPOSIT"],
    },
    redirectUrl: "https://ansuman528.github.io/VisualPe",
  });

  return data;
};

module.exports = createData;
