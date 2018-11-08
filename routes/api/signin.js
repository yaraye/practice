const member = require('../../models/member');

module.exports = (app) => {
    
    app.post('/api/signup', (req, res, next)=>{
        const{body} = req;
        const{password} = body;
        const {name} = body;

        if(!name){
            return res.send({
                success:false,
                message : "Name can't be blank."
            });
        }
        if(!password){
            return res.send({
                success:false,
                message : "Password can't be blank."
            });
        }

        name = name.toLowerCase();
        name = name.trim();

        member.find({
            name:name
        },(err, previousMember) => {
            if(err){
                return res.send({
                    success: false,
                    message: "Server error"
                });
            }else if (previousMember.length >0){
                return res.send({
                    success: false,
                    message: "Account already exist"
                });

            }

            const newMember = new member();

            newMember.name = name;
            newMember.password = newMember.generateHash(password);
            newMember.save((err,user)=>{
                if(err){
                    return res.send({
                        success: false,
                        message: "Server error"
                    });
                }
                    return res.send({
                        success: true,
                        message: "Signed up"
                    });
            });
        });
    });
};