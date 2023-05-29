const { followers } = require ('../models');
class FollowersDAO{
    
    static async listUserFollowing(username){
        const followings = await followers.findAll({where: {follower:username}})
        const listFollowings = followings.map(follower => follower.following);
        return listFollowings;
    }
    static async listUserFollowers(username){
        const followersResult = await followers.findAll({where: {following:username}})
        const listFollowers = followersResult.map(follower => follower.follower);
        return listFollowers;
    }
    static async addNewFollow(follow){
        return await followers.create(follow);
    }
    static async deleteFollow(follower, following) {
        return await followers.destroy({ where: { follower:follower, following:following } });
    }
}
module.exports = FollowersDAO;