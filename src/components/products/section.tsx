import { Activity, Code, Zap, Globe, Link, Terminal, ExternalLink } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "@/components/ui/button"


function ProductsSection() {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-950 border-gray-900 hover:border-gray-800 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Code className="w-4 h-4 text-gray-400" />
                    <CardTitle className="text-white text-lg font-medium">VoidCLI</CardTitle>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500 text-sm">v2.1</span>
                    <Link href="/products/voidcli" className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">Command automation</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-950 border-gray-900 hover:border-gray-800 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Terminal className="w-4 h-4 text-gray-400" />
                    <CardTitle className="text-white text-lg font-medium">VoidSync</CardTitle>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500 text-sm">v1.3</span>
                    <Link href="/products/voidsync" className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">Team collaboration</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-950 border-gray-900 hover:border-gray-800 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-4 h-4 text-gray-400" />
                    <CardTitle className="text-white text-lg font-medium">VoidDeploy</CardTitle>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500 text-sm">v3.0</span>
                    <Link href="/products/voiddeploy" className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">Zero-config deployment</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-950 border-gray-900 hover:border-gray-800 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-4 h-4 text-gray-400" />
                    <CardTitle className="text-white text-lg font-medium">VoidAnalytics</CardTitle>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500 text-sm">v0.8</span>
                    <Link
                      href="/products/voidanalytics"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">Privacy-first metrics</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-950 border-gray-900 hover:border-gray-800 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Activity className="w-4 h-4 text-gray-400" />
                    <CardTitle className="text-white text-lg font-medium">VoidMonitor</CardTitle>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500 text-sm">v1.9</span>
                    <Link href="/products/voidmonitor" className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">Application monitoring</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-950 border-gray-900 hover:border-gray-800 transition-all duration-300 group border-dashed">
              <CardHeader className="pb-4">
                <CardTitle className="text-gray-500 text-lg font-medium text-center">More Soon</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <Button variant="ghost" className="text-gray-500 hover:text-gray-400 text-sm">
                    Notify Me
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export { ProductsSection }
