import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";

export default function Home() {
  return (
    <div className="p-4 grid gap-6">
      <h1 className="text-3xl font-bold">📈 Prash's Market Dashboard</h1>

      <Tabs defaultValue="moneyflow" className="w-full">
        <TabsList className="grid grid-cols-4 gap-2">
          <TabsTrigger value="moneyflow">Money Flow</TabsTrigger>
          <TabsTrigger value="stocks">Stocks</TabsTrigger>
          <TabsTrigger value="crypto">Crypto</TabsTrigger>
          <TabsTrigger value="bonds">Bonds</TabsTrigger>
        </TabsList>

        <TabsContent value="moneyflow">
          <Card>
            <CardContent className="p-4 space-y-6">
              <p className="text-lg">
                Analyze daily, weekly, and monthly trends of money flow across major asset classes — stocks, bonds, commodities, and crypto. Understand which asset is leading, why capital is moving the way it is, and what technical analysis suggests for each.
              </p>

              <iframe
                src="https://s.tradingview.com/embed-widget/market-overview/?locale=en#%7B%22colorTheme%22%3A%22dark%22%2C%22showChart%22%3Atrue%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22400%22%2C%22tabs%22%3A%5B%7B%22title%22%3A%22Assets%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22INDEX%3ASPX%22%2C%22d%22%3A%22S%26P 500%22%7D%2C%7B%22s%22%3A%22CME%3AGC1%21%22%2C%22d%22%3A%22Gold%22%7D%2C%7B%22s%22%3A%22CRYPTO%3ABTCUSD%22%2C%22d%22%3A%22Bitcoin%22%7D%2C%7B%22s%22%3A%22CME%3ACL1%21%22%2C%22d%22%3A%22Oil%22%7D%5D%7D%5D%7D"
                width="100%"
                height="400"
                frameBorder="0"
                allowTransparency="true"
                scrolling="no"
              ></iframe>

              <iframe
                src="https://s.tradingview.com/embed-widget/advanced-chart/?locale=en#%7B%22symbol%22%3A%22INDEX%3ASPX%22%2C%22interval%22%3A%22D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A1%2C%22withdateranges%22%3Atrue%2C%22studies%22%3A%5B%22MACD%40tv-basicstudies%22%2C%22RSI%40tv-basicstudies%22%5D%2C%22hide_side_toolbar%22%3Afalse%2C%22allow_symbol_change%22%3Atrue%2C%22save_image%22%3Afalse%2C%22details%22%3Atrue%7D"
                width="100%"
                height="500"
                frameBorder="0"
                allowTransparency="true"
                scrolling="no"
              ></iframe>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stocks">
          <Card>
            <CardContent className="p-4">
              <p>Sector rotation, institutional flow, and technical summaries for equities.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="crypto">
          <Card>
            <CardContent className="p-4">
              <p>Crypto inflow/outflow data, major coin tracking, sentiment, and altcoin watchlist.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bonds">
          <Card>
            <CardContent className="p-4">
              <p>Bond yields, credit spreads, and macroeconomic sentiment data.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
