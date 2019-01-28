require 'swagger_helper'

describe 'Posts API' do
  path "/api/v1/posts/{slug}" do
    get 'Retrieves a post' do
      tags 'Posts'
      produces 'application/json'
      parameter name: :slug, :in => :path, :type => :string

      response '200', 'post found' do
        examples 'application/json' => {
          "_id": {
            "$oid": "5c33bd386d0c4455b471f42c"
          },
          "author": "Example Author",
          "body": "Example post body",
          "created_at": "2019-01-07T20:57:28.600Z",
          "slug": "example-post-1",
          "title": "Example Title",
          "updated_at": "2019-01-07T20:57:28.600Z"
        }
        
        schema type: :object,
          title: "PostsApiV1-200",
          properties: {
            _id: { type: :object, properties: {
              "$oid": {type: :string}
            }},
            slug: { type: :string },
            title: { type: :string },
            body: { type: :string },
            author: { type: :string },
            created_at: { type: :string, format: "date-time" },
            updated_at: { type: :string, format: "date-time" },
            url: { type: :string }
          },
          required: [ 'slug', 'title' ]

        let(:slug) { Post.create(slug: 'test1', title: 'foo', body: 'bar').slug }
        run_test!
      end

      response '404', 'post not found' do
        examples 'application/json' => {
          "message": "no record found"
        }

        schema type: :object,
          title: "PostsApiV1-404",
          properties: {
            message: { type: :string }
          }

        let(:slug) { 'invalid' }
        run_test!
      end

      response '500', 'server error' do
        examples 'application/json' => {
          "message": "server error"
        }

        schema type: :object,
          title: "PostsApiV1-500",
          properties: {
            message: { type: :string }
          }

        let(:slug) { 'raise-500' }
        run_test!
      end
    end
  end
end