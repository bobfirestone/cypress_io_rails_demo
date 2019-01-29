module Api
  module V1
    class PostsController < ApplicationController
      rescue_from Mongoid::Errors::DocumentNotFound, with: :record_not_found
      rescue_from Error::CustomServerError, with: :server_error
      
      def index
        @posts = ::Post.all
      end

      def show
        raise Error::CustomServerError if params[:slug] == 'raise-500'
        @post = ::Post.find_by(slug: params[:slug])
      end

      private
      def record_not_found(error)
        render(json: {message: "no record found"}, status: :not_found)
      end

      def server_error(error)
        render(json: {message: "server error"}, status: :internal_server_error)
      end
    end
  end
end