import Mock from "mockjs";
const Random = Mock.Random;

const mProduct = parmas => {
  return Mock.mock({
    "data|60": [
      {
        "id": "@increment",
        "img": () => Random.dataImage("120x120", Random.name()),
        "description": "@sentence",
        "inventory|0-20": 5,
        "title": "@name",
        "price|0-20": 10
      }
    ]
  });
};

Mock.setup({
  // 异步延时测试
  // timeout: "3000-5000"
});

Mock.mock("/mock_product", "get", mProduct);
