module Api
	module V1
		class PoolsController < ApplicationController

			protect_from_forgery with: :null_session  # to get around no security token error since not doing 'edit' method for form

			def index
				pools = Pool.all
				render json: PoolSerializer.new(pools, options).serialized_json
			end

			def show
				pool = Pool.find_by(slug: params[:slug])
				# if pool
					render json: PoolSerializer.new(pool, options).serialized_json  # if no pool, will return "data": null  object response
				# else
					# render json: { error: "no such pool with slug #{params[:slug]}" }, status: 422
					# head :no_content
				# end
			end

			def create
				pool = Pool.new(pool_params)

				if pool.save
					render json: PoolSerializer.new(pool).serialized_json
				else
					render json: { error: pool.errors.messages }, status: 422
				end
			end

			def update
				pool = Pool.find_by(slug: params[:slug])

				if pool
					if pool.update(pool_params)
						render json: PoolSerializer.new(pool, options).serialized_json
					else
						render json: { error: pool.errors.messages }, status: 422
					end
				else
					render json: { error: "no such pool with slug #{params[:slug]}" }, status: 422
				end
			end

			def destroy
				pool = Pool.find_by(slug: params[:slug])

				if pool
					if pool.destroy
						head :no_content
					else
						render json: { error: pool.errors.messages }, status: 422
					end
				else
					render json: { error: "no such pool with slug #{params[:slug]}" }, status: 422
				end
			end

			private

			def pool_params
				params.require(:pool).permit(:name, :image_url)
			end

			def options # to make compound document when initializing the serializer
				@options ||= { include: %i[reviews]}  # %i[reviews blah kapow]  >> [:reviews, :blah, :kapow]  i.e. from a non-interpolated string of symbols. can use %I if want to #{interpolate}
			end

		end
	end
end