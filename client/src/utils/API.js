import axios from 'axios';

export default {
	createUser: (data) => {
		return axios.post('/api/signup', data);
	},
  // Gets all Members
  getMembers: function() {
    return axios.get("/api/members");
  },
  // Gets the member with the given id
  getMember: function(id) {
    return axios.get("/api/members/" + id);
  },
  // Deletes the member with the given id
  deleteMember: function(id) {
    return axios.delete("/api/members/" + id);
  },
  updateMember: function(idData, updatedData) {
    return axios.put("/api/members/" + idData.id, updatedData);
  },
  // Saves a member to the database
  saveMember: function(memberData) {
    return axios.post("/api/members", memberData);
  }
};
