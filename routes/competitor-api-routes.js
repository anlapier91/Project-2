var db = require("../models");

module.exports = function(app)
{
    app.put("api/updateCompetitor/:id", function(req, res)
    {
        db.Competitor.update(
            req.body,
            {
                where: req.body.id
            }).then(function(dbCompetitor)
        {
            res.json(dbCompetitor);
        });
    });

    app.delete("api/removeCompetitor/:id", function(req, res)
    {
        db.Competitor.destroy({
            where: 
            {
                id: req.params.id
            }
        }).then(function(dbCompetitor)
        {
            res.json(dbCompetitor);
        });
    });
};