require 'rails_helper'

RSpec.describe Post, type: :model do
  it "has a title" do
    expect(Post.new(title: "title", slug: "test-slug").valid?).to be true
  end

  it "validates presence of title" do
    expect(Post.new().valid?).to be false
  end
end
