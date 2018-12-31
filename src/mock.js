import Mock from "mockjs";
const Random = Mock.Random;

const mProduct = parmas => {
  console.log("in Mock, Parmas is: ", parmas);
  return Mock.mock({
    "data|10": [
      {
        id: "@increment",
        img: Random.dataImage("500x500", "@name"),
        detail: "@sentence",
        "count|0-20": 5,
        name: "@name",
        "prince|0-20": 10
      }
    ]
  });
};

Mock.setup({
  timeout: "3000-5000"
});

Mock.mock("/mock_product", "get", mProduct);
