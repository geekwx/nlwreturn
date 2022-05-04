
/** Exemplo de teste */
// test('sum 2+ 2', () => {
//     expect(2+2).toBe(4)
// });

import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailspy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailspy}
)


//spies = espioes utilizado


describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
      
        //Resolva a submissão e não retorne erro
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,87563544'
        })).resolves.not.toThrow();


        //teste para ver se a outras funções estão sendo chamada 

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailspy).toHaveBeenCalled();
    });


    it('should not be able  to submit feedback without type', async () => {
      
        //Resolva a submissão e não retorne erro
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,87563544'
        })).rejects.toThrow();
    });

    
    it('should not be able  to submit feedback without comment', async () => {
      
        //Resolva a submissão e não retorne erro
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,87563544'
        })).rejects.toThrow();
    });
    it('should not be able  to submit feedback with  an invalid screenshot', async () => {
      
        //Resolva a submissão e não retorne erro
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'image.jpg'
        })).rejects.toThrow();
    });


});