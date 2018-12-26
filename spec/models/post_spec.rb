require 'rails_helper'

RSpec.describe Post, type: :model do
  it "must have a title" do
    post = Post.new()
    expect(post.valid?).to be false
  end
end
