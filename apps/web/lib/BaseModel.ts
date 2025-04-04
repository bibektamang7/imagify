abstract class BaseModel {
	abstract trainModel(zipUrl: string, triggerWord: string): Promise<void>;
	abstract generateImage(prompt: string, tensorPath: string): Promise<void>;
}

export { BaseModel };
