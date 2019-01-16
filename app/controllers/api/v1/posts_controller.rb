module Api
  module V1
    class PostsController < ApplicationController
      def index
        @posts = ::Post.all
        render json: @posts, status: :ok
      end

      def show
        @post = ::Post.find_by(slug: params[:slug])
        render json: @post, status: :ok
      end
    end
  end
end