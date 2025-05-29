
import ChatInterface from '@/components/ChatInterface';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              AI Chat Assistant
            </h1>
            <p className="text-lg text-gray-600">
              Connect with our intelligent assistant for instant help and support
            </p>
          </div>

          {/* Chat Container */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 h-[600px] overflow-hidden">
            <ChatInterface sessionId="1" />
          </div>

          {/* Features Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl">💬</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Real-time Chat</h3>
              <p className="text-gray-600">Instant responses with smooth animations</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-xl">🤖</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">AI Powered</h3>
              <p className="text-gray-600">Intelligent responses tailored to your needs</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Fast & Reliable</h3>
              <p className="text-gray-600">Quick responses with error handling</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
