module Api
  module V1
    class PostsController < ApplicationController
      def index
        @posts = ::Post.all
        render json: @posts, status: :ok
      end

      def show
        @post = ::Post.where(slug: params[:slug]).first
        render json: @post, status: :ok
      end
    end
  end
end