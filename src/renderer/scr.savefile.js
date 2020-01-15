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
    return this.meta.users[this.meta.userindex[index]] || { "id": 0, "name": "&lt;unknown&gt;", "nick": "&lt;unknown&gt;", "avatar": "", "discriminator": "0000" };
  }

  getUserById(user){
    return this.meta.users[user] || { "id": 0, "name": user, "nick": user, "avatar": "", "discriminator": "0000" };
  }

  getUserIndex(user){
    return this.meta.userindex.indexOf(user);
  }

  getMessages(channel){
    return this.data[channel] || {};
  }
}
