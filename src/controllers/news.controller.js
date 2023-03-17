import { createService, findAllService} from '../services/news.service.js'


const create = (req, res) => {
  try {
    const {title, text, banner} = req.body;

    if(!title || !text || !banner) {
      res.status(404).send({
        message: 'Please submit all fields for registration'
      });

    }
    await createService({
      title,
      text,
      banner,
      id: 'objectidfake1'
    })


    res.send(201);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
  
  

};

const findAll = (req, res) => {
  const news = [];
  res.send(news);
};

export default { create, findAll}