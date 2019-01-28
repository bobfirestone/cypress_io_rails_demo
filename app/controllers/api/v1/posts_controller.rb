module Api
  module V1
    class PostsController < ApplicationController
      rescue_from Mongoid::Errors::DocumentNotFound, with: :record_not_found
      
      def index
        @posts = ::Post.all
      end

      def show
        @post = ::Post.find_by(slug: params[:slug])
      end

      private
      def record_not_found(error)
        render json: {message: "no record found"}, status: :not_found
      end
    end
  end
end