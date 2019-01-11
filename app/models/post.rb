class Post
  include Mongoid::Document
  include Mongoid::Timestamps

  field :slug, type: String
  field :title, type: String
  field :body, type: String
  field :author, type: String

  validates :title, presence: true
  validates :slug, presence: true
end
