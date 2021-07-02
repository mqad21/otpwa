import parseWaId from "../modules/parse_wa_id.js";
import waSendText from "../modules/wa_send_text.js";

const messageController = new Object();

messageController.send = async (req, res) => {
  if (!req.body) {
    res.status(400).json({
      message: "Request body can not be empty.",
    });
  }

  try {
    const id = parseWaId(req.body.number);
    await waSendText(id, req.body.message);
    res.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (e) {
    res
      .json({
        success: false,
        message: "Failed to send message. " + e,
      })
      .status(500);
  }
};

export default messageController;