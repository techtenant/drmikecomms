import Link from 'next/link';
import CookieIcon from '@mui/icons-material/Cookie';

export default function CookieNoticePage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-clinic-blue to-clinic-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <CookieIcon sx={{ fontSize: 48 }} className="mb-4" />
            <h1 className="text-5xl font-bold mb-4">Cookie Notice</h1>
            <p className="text-xl opacity-90">Last updated: January 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-clinic-dark mb-6">What Are Cookies?</h2>
            <p className="text-gray-700 mb-8">
              Cookies are small text files stored on your device when you visit our website. 
              They help us provide you with a better experience.
            </p>

            <h3 className="text-2xl font-bold text-clinic-dark mb-4">Cookies We Use</h3>

            <div className="space-y-6">
              {/* Essential */}
              <div className="border-2 border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-bold text-clinic-dark">Essential Cookies</h4>
                  <span className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full font-semibold">
                    Required
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  Necessary for the website to function. Cannot be disabled.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Session management</li>
                  <li>• Security features</li>
                  <li>• Load balancing</li>
                </ul>
              </div>

              {/* Analytics */}
              <div className="border-2 border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-bold text-clinic-dark">Analytics Cookies</h4>
                  <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">
                    Optional
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  Help us understand how visitors use our website (Google Analytics).
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Page views and traffic</li>
                  <li>• User journey analysis</li>
                  <li>• Performance metrics</li>
                </ul>
              </div>

              {/* Functional */}
              <div className="border-2 border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-bold text-clinic-dark">Functional Cookies</h4>
                  <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">
                    Optional
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  Remember your preferences and settings.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Language preferences</li>
                  <li>• Cookie consent choices</li>
                  <li>• User preferences</li>
                </ul>
              </div>

              {/* Marketing */}
              <div className="border-2 border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-bold text-clinic-dark">Marketing Cookies</h4>
                  <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">
                    Optional
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  Track your activity for targeted advertising (only with consent).
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Ad personalization</li>
                  <li>• Conversion tracking</li>
                  <li>• Remarketing</li>
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-clinic-dark mb-4">Managing Cookies</h3>
              <p className="text-gray-700 mb-6">
                You can manage your cookie preferences at any time:
              </p>
              <div className="space-y-4">
                <button className="w-full md:w-auto bg-clinic-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
                  Manage Cookie Settings
                </button>
                <p className="text-sm text-gray-600">
                  Or adjust settings in your browser. Note that disabling cookies may affect website functionality.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-clinic-dark mb-2">More Information</h4>
              <p className="text-gray-700 mb-3">
                For more details on how we handle your data, see our{' '}
                <Link href="/privacy" className="text-clinic-blue underline">Privacy Policy</Link>.
              </p>
              <p className="text-gray-700">
                Questions? Email: <a href="mailto:privacy@hansplace.com" className="text-clinic-blue underline">privacy@hansplace.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 bg-white"></div>
    </main>
  );
}
