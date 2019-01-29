require 'rails_helper'

RSpec.describe HomepageController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
      Percy::Capybara.snapshot(page, name: 'homepage')
    end
  end

end
