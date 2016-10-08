class CommentsController < ApplicationController

  def index
    @comments = Comment.all
  end

  def create
    @property = Property.find(params[:currentPropertyId])
    puts "THIS IS PROPERRTYYYY IN THE COMMENTS CREATE ACTION!!!!"
    puts "#{@property}"
    @property.comments.create()
  end

end