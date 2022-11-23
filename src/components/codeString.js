export const sqlCodeString = `-- ETH weekly deposited to Beacon

SELECT
  -- Convert wei to ether
  SUM(VALUE) / 1e18 AS total_deposited_eth,
  -- Truncate time to date
  date_trunc('week', DATE(block_time)) AS week_date
FROM ethereum_mainnet.traces
WHERE LOWER(to_address) =
  LOWER('0x00000000219ab540356cBB839Cbe05303d7705Fa')
  AND STATUS = 1
  AND VALUE > 0
GROUP BY 2
ORDER BY 2
`

export const graphqlCodeString =  `{
  records(filter: {
    week_date: {
      min: “2022-07-04”,
      max: ”2022-10-10”
  }}) {
    week_date
    total_deposited_eth
  }
}
`

export const dataCodeString = `{
  "data": {
    "records": [
      {
        "total_deposited_eth": 25232,
        "week_date": "2022-07-04"
      },
      {
        "total_deposited_eth": 89552,
        "week_date": "2022-07-11"
      },
      {
        "total_deposited_eth": 42816,
        "week_date": "2022-07-18"
      },
      {
        "total_deposited_eth": 36720,
        "week_date": "2022-07-25"
      },
      {
        "total_deposited_eth": 24624,
        "week_date": "2022-08-01"
      },
      {
        "total_deposited_eth": 94576,
        "week_date": "2022-08-08"
      },
      {
        "total_deposited_eth": 35859,
        "week_date": "2022-08-15"
      },
      {
        "total_deposited_eth": 47470,
        "week_date": "2022-08-22"
      },
      {
        "total_deposited_eth": 130937,
        "week_date": "2022-08-29"
      },
      {
        "total_deposited_eth": 124018.00000000001,
        "week_date": "2022-09-05"
      },
      {
        "total_deposited_eth": 155206,
        "week_date": "2022-09-12"
      },
      {
        "total_deposited_eth": 158576,
        "week_date": "2022-09-19"
      },
      {
        "total_deposited_eth": 141568,
        "week_date": "2022-09-26"
      },
      {
        "total_deposited_eth": 82176,
        "week_date": "2022-10-03"
      }
    ]
  }
}`

export const snippetsCodeSting = `import requests
import json

endpoint = 'https://api.zettablock.com/qugate/v1/userapis/sq_6edb14cd3ebd4cb79685c9b965c93f64/graphql'
headers = {'authorization': 'Basic c2NvdHQ6aGVsbG9fc2NvdHQ5MTI='}
data = {'query': """
{records(
  filter: {
    week_date:
        {
            min: "2022-07-11",
            max: "2022-10-10"
        } }) {
    week_date
    total_deposited_eth
  }
}
"""}

res = requests.post(endpoint, headers=headers, data=json.dumps(data))
print(res.text)`

export const chartData = {

}
