module Api
	module V1
		class ReviewsController < ApplicationController

			protect_from_forgery with: :null_session

			def create
				# review = Review.new(review_params) # this won't work as review_params not in right object format, so should add review via the pool to set pool_id
				review = pool.reviews.new(review_params)
				if review.save
					render json: ReviewSerializer.new(review).serialized_json
				else
					render json: { error: review.errors.messages}, status: 422
				end
			end

			def destroy
				review = Review.find(params[:id])

				if review.destroy
					head :no_content
				else
					render json: { error: review.errors.messages}, status: 422
				end
			end

			private

			def pool
				@pool ||= Pool.find(params[:pool_id])
			end

			def review_params
				params.require(:review).permit(:title, :description, :score, :pool_id)
			end
		end
	end
end