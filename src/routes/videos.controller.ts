import { RequestHandler } from "express";
import Video from './Video'

export const createVideo: RequestHandler = async (req, res) => {
    
    const found = await Video.findOne({ url: req.body.url })

    if(found) {
        return res.status(301).json({message: "the url already exist"})
    }

    const video = new Video(req.body)
    const saved = await video.save()
    res.json({data: saved})

}

export const getVideos: RequestHandler = async (req, res) => {
    
    try { 
        const videos = await Video.find()
        res.json({data: videos})
    } catch(error) {
        res.json(error)
    }
}

export const getVideo: RequestHandler = async (req, res) => {
    
    try { 
        const video = await Video.findById(req.params.id)
        if(!video) {
            res.status(404).json({message: "not found"})
        }
        res.json({data: video})
    } catch(error) {
        res.json(error)
    }
}

export const deleteVideo: RequestHandler = async (req, res) => {

    const video = await Video.findByIdAndDelete(req.params.id)
    if(!video) {
        res.status(404).json({message: "not found"})
    }
    res.json({data: "deleted"})
}

export const updateVideo: RequestHandler = async (req, res) => {
 
    const video = await Video.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {new: true}
    )

    if(!video) {
        res.status(404).json({message: "not found"})
    }
    res.json({data: video})
}