class MemoryCardsController < ApplicationController
  def index
    
  end

  def character 
    @memories = MemoryCard.order("RANDOM()")
    @memo_back = MemoryCard.find_by(title: "Memo Back")
  end

  def new
    @memory = MemoryCard.new
  end

  def create
    @memory = MemoryCard.new(memory_params)

    if @memory.save 
      redirect_to memory_cards_path
    else 
      render :new
    end
    
  end

  def delete
    @memory = MemoryCard.find(params[:id])
  end

  def destroy
    MemoryCard.find(params[:id]).destroy
    redirect_to memory_cards_path
  end




  private 

    def memory_params
      params.require(:memory_card).permit(:title, :card) 
    end
end
