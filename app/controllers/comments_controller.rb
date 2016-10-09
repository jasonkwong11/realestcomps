class CommentsController < ApplicationController

  def index
    @comments = Comment.all
  end

  def create
    @property = Property.find(params[:comment][:currentPropertyId]) 
    @property.comments.find_or_create_by(username: params[:comment][:username], content: params[:comment][:content])
    render json: @property
  end

end