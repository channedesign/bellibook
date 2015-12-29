class ColoringsController < ApplicationController

	def index
		@colorings = Coloring.all
	end

	def show 
		@coloring = Coloring.find(params[:id])
	end

	def new 
		@coloring = Coloring.new
	end

	def create
		@coloring = Coloring.new(coloring_params)

		if @coloring.save
			redirect_to colorings_path
		else
			render "new"
		end
	end

	def delete

	end

	private
		def coloring_params
			params.require(:coloring).permit(:title, :coloring)
		end

end