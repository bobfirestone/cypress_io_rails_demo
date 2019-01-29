require 'rails_helper'

RSpec.describe "posts/index", type: :view do
  before(:each) do
    assign(:posts, [
      Post.create!(
        :title => "Title",
        :body => "Body",
        slug: "post-index-test-slug-1",
        :author => "Author"
      ),
      Post.create!(
        :title => "Title",
        :body => "Body",
        slug: "post-index-test-slug-2",
        :author => "Author"
      )
    ])
  end

  it "renders a list of posts" do
    render
    assert_select "tr>td", :text => "Title".to_s, :count => 2
    assert_select "tr>td", :text => "Body".to_s, :count => 2
    assert_select "tr>td", :text => "Author".to_s, :count => 2
  end
end
