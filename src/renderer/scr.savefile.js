class SAVEFILE{
  constructor(parsedObj){
    var me = this;
    
    me.meta = parsedObj.meta;
    me.data = parsedObj.data;
    
    me.meta.users = me.meta.users || {};
    me.meta.userindex = me.meta.userindex || [];
    me.meta.servers = me.meta.servers || [];
    me.meta.channels = me.meta.channels || {};
  };

  static isValid(parsedObj){
    return parsedObj && typeof parsedObj.meta === "object" && typeof parsedObj.data === "object";
  };

  getServer(index){
    return this.meta.servers[index] || { "name": "&lt;unknown&gt;", "type": "ERROR" };
  }

  getChannels(){
    return this.meta.channels;
  }

  getChannelById(channel){
    return this.meta.channels[channel] || { "id": channel, "name": channel };
  }

  getUsers(){
    return this.meta.users;
  }

  getUser(index){
    var obj_user = this.meta.users[this.meta.userindex[index]];
    obj_user.id = Object.keys(this.meta.users)[index];
    if (obj_user.nick == null)
      obj_user.nick = obj_user.name;
    return obj_user;
  }

  getUserById(user){
    return this.meta.users[user] || { "name": user };
  }

  getUserIndex(user){
    return this.meta.userindex.indexOf(user);
  }

  getMessages(channel){
    return this.data[channel] || {};
  }
}
