import * as tf from '@tensorflow/tfjs';
import {loadGraphModel} from '@tensorflow/tfjs-converter';

const canvas = document.querySelector("canvas");

const MODEL_URL = 'yolov8n_web_model/model.json';

const model = await loadGraphModel(MODEL_URL);
const detection = model.detection(mediaDevices.getUserMedia({ video: { facingMode: { exact: "environment" } } }));

canvas = detection;