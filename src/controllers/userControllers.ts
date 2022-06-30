import { Request, Response } from "express";
import { dataType } from "../models/data";

let data: dataType = [{ id: 0, name: "rodrigo", email: "rodrigo@email.com" }];

class UserController {
  public UserGet(req: Request, res: Response) {
    res.json({
      response: data,
      message: "Get done successfully!",
    });
  }

  public UserPost(req: Request, res: Response) {
    data.push(req.body);
    res.json({
      response: data,
      message: "Post done successfully!",
    });
  }

  public UserDelete(req: Request, res: Response) {
    const index = parseInt(req.params.id);
    data.splice(index, 1);
    res.json({
      response: data,
      message: "Delete done successfully!",
    });
  }
}

export const userController = new UserController();
