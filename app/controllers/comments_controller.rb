class CommentsController < ApplicationController

  def index
    @comments = Comment.all
  end

  def create
    @property = Property.find(params[:comment][:currentPropertyId])
    @comment = @property.comments.create(username: params[:comment][:username], content: params[:comment][:content])

    if @comment.save
      render json: @property
    else
      render json: {errors: @comment.errors.full_messages }, status: :unprocessable_entity
    end
  end

end