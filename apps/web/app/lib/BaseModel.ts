abstract class BaseModel {
	abstract trainModel(zipUrl: string, triggerWord: string): Promise<any>;
	abstract generateImage(prompt: string, tensorPath: string): Promise<any>;
}

export { BaseModel };
