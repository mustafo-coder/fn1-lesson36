import { Edit2, Mail, Phone, Globe, ExternalLink } from "lucide-react";

export default function RightSidebar() {
  return (
    <aside className="w-80 bg-white border-l border-gray-200 p-6 overflow-y-auto">
      <div className="space-y-8">
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Additional Details</h3>
            <button className="text-gray-400 hover:text-gray-600">
              <Edit2 className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-sm">jakegyl@email.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-sm">+44 245 572 135</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Languages</p>
                <p className="text-sm">English, French</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Social Links</h3>
            <button className="text-gray-400 hover:text-gray-600">
              <Edit2 className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-3">
            <a
              href="#"
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
            >
              <span className="text-gray-600">Instagram</span>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>
            <a
              href="#"
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
            >
              <span className="text-gray-600">Twitter</span>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>
            <a
              href="#"
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
            >
              <span className="text-gray-600">Website</span>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>
          </div>
        </section>
      </div>
    </aside>
  );
}
