json.extract! post, :id, :slug, :title, :body, :author, :created_at, :updated_at
json.url post_url(post.slug, format: :json)
