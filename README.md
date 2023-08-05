
<p align="center">
<a href="">
  <img src="static/Frolic React Icon.png" alt="Frolic Logo" width="500">
</a>
</p>

`frolic-react` is an open source react library to build UI for analytics dashboards much faster. It is built on top of [react](https://react.dev), [tailwindcss](https://tailwindcss.com) and [recharts](https://recharts.org). You can use `frolic-react` directly with [frolic](https://github.com/frolicorg/frolic) backend service to create full stack dashboards 10x faster.

![GitHub contributors](https://img.shields.io/github/contributors/frolicorg/frolic-react)
[![GitHub issues](https://img.shields.io/github/issues/frolicorg/frolic-react)](https://github.com/frolicorg/frolic-react/issues)
[![GitHub stars](https://img.shields.io/github/stars/frolicorg/frolic-react)](https://github.com/frolicorg/frolic-react/stargazers)
![GitHub closed issues](https://img.shields.io/github/issues-closed/frolicorg/frolic-react)
![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/frolicorg/frolic-react)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/frolicorg/frolic-react)
[![GitHub license](https://img.shields.io/github/license/frolicorg/frolic-react)](https://github.com/frolicorg/frolic-react)
[![Twitter Follow](https://img.shields.io/twitter/follow/FrolicOrg?style=social)](https://twitter.com/FrolicOrg)

<!-- 
![GitHub release (latest by date)](https://img.shields.io/github/v/release/FrolicOrg/Frolic)
![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/tooljet/tooljet-ce)
-->

<img width="1187" alt="Screenshot 2023-08-03 at 2 55 45 PM" src="https://github.com/frolicorg/frolic-react/assets/15258498/ec41611f-071e-4700-8d12-7f96d059fdb1">

## Installation

`frolic-react` can be installed directly through npm.

```
npm i frolic-react
```

In your `tailwind.config.js`, add the following code:

```tsx
module.exports = {
  content: [
    ...
    'node_modules/frolic-react/**/*.{js,ts,jsx,tsx}',
  ],
  ...
  plugins: [
    require('frolic-react'),
  ],
}
```

## Usage

```js
import { Card, LineChart, BarChart } from 'frolic-react'

const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 }
];

const Page = () => {
  return (
    <div className="frid grid-cols-2 gap-5">
      <Card title="Line Chart">
        <LineChart data={data} metrics={["uv", "pv", "amt"]} dimensions={["name"]}></LineChart>
      </Card>
      <Card title="Bar Chart">
        <BarChart data={data} metrics={["uv", "pv", "amt"]} dimensions={["name"]}></BarChart>
      </Card>
    </div>
  );
};

export default Page;
```

## Features

* Ready made components for all basic charts (e.g. `LineChart`, `BarChart`, etc). 

## Integrations

You can use `frolic-react` directly with [frolic](https://github.com/frolicorg/frolic) backend service to create full stack dashboards much faster.

## Support and Community

Issues are inevitable. When you have one, our entire team and our active developer community is around to help.

💬 Ask for help on [Discord](https://discord.gg/NA9nkZaQnv)

⚠️ Open an issue right here on [GitHub](https://github.com/frolicorg/frolic-react/issues/new/choose)

## How to Contribute

We ❤️ our contributors. We're committed to fostering an open, welcoming, and safe environment in the community.

📕 We expect everyone participating in the community to abide by our [Code of Conduct](https://github.com/frolicorg/frolic-react/wiki/Code-of-Conduct). Please read and follow it. 

🤝 If you'd like to contribute, start by reading our [Contribution Guide](https://github.com/frolicorg/frolic-react/wiki/Guide-to-Contribution).

Lets build great software together.

## License

This project is available under the [Apache License 2.0](https://github.com/frolicorg/frolic-react/blob/prod/LICENSE)
