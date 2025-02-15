import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import GlobalApi from './../../../../../service/GlobalApi';
import { Brain, LoaderCircle } from 'lucide-react';
import { toast } from 'sonner';
import { AIChatSession } from './../../../../../service/AIModal';

const prompt = "Job Title: {jobTitle} , Depends on job title give me list of summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format";

function Summery({ enabledNext }) {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [summery, setSummery] = useState();
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const [aiGeneratedSummeryList, setAiGenerateSummeryList] = useState([]);

    useEffect(() => {
        if (summery) {
            setResumeInfo({
                ...resumeInfo,
                summery: summery
            });
        }
    }, [summery]);

    // const GenerateSummeryFromAI = async () => {
    //     setLoading(true);
    //     const PROMPT = prompt.replace('{jobTitle}', resumeInfo?.jobTitle);
    //     console.log(PROMPT);

    //     try {
    //         const result = await AIChatSession.sendMessage(PROMPT);
    //         const parsedResponse = JSON.parse(result.response.text());

    //         // Ensure the response is an array
    //         if (Array.isArray(parsedResponse)) {
    //             setAiGenerateSummeryList(parsedResponse);
    //         } else {
    //             // If not an array, log and handle error gracefully
    //             console.error("Invalid response format", parsedResponse);
    //             setAiGenerateSummeryList([]);
    //         }
    //     } catch (error) {
    //         console.error("Error generating summary:", error);
    //         setAiGenerateSummeryList([]);
    //     }

    //     setLoading(false);
    // };

    const GenerateSummeryFromAI = async () => {
        setLoading(true);
        const PROMPT = prompt.replace('{jobTitle}', resumeInfo?.jobTitle);
        
        try {
            const result = await AIChatSession.sendMessage(PROMPT);
            let parsedResponse = JSON.parse(result.response.text());
    
            // Handle both array and object with summary_list formats
            const summaryList = Array.isArray(parsedResponse) 
                ? parsedResponse 
                : parsedResponse.summary_list || [];
    
            setAiGenerateSummeryList(summaryList);
            setLoading(false);
        } catch (error) {
            console.error('Error generating summary:', error);
            setAiGenerateSummeryList([]);
            setLoading(false);
        }
    }
    
    const onSave = (e) => {
        e.preventDefault();
        setLoading(true);

        const data = {
            data: {
                summery: summery
            }
        };

        GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(resp => {
            console.log(resp);
            enabledNext(true);
            setLoading(false);
            toast("Details updated");
        }, () => {
            setLoading(false);
        });
    };

    return (
        <div>
            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
                <div className="flex items-center mb-4">
                    <img src='https://cdn-icons-png.flaticon.com/128/684/684872.png' alt="Education" className="w-8 h-8 mr-2" />
                    <h2 className="font-bold text-lg">Summery</h2>
                </div>

                <p>Add Summery for your job title</p>

                <form className='mt-7' onSubmit={onSave}>
                    <div className='flex justify-between items-end'>
                        <label>Add Summery</label>
                        <Button
                            variant="outline"
                            onClick={() => GenerateSummeryFromAI()}
                            type="button"
                            size="sm"
                            className="border-primary text-primary flex gap-2"
                        >
                            <Brain className='h-4 w-4' /> Generate from AI
                        </Button>
                    </div>
                    <Textarea
                        className="mt-5"
                        required
                        value={summery}
                        defaultValue={summery ? summery : resumeInfo?.summery}
                        onChange={(e) => setSummery(e.target.value)}
                    />
                    <div className='mt-2 flex justify-end'>
                        <Button type="submit" disabled={loading}>
                            {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
                        </Button>
                    </div>
                </form>
            </div>

            {aiGeneratedSummeryList.length > 0 && (
                <div className='my-5'>
                    <h2 className='font-bold text-lg'>Suggestions</h2>
                    {aiGeneratedSummeryList.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setSummery(item?.summary)}
                            className='p-5 shadow-lg my-4 rounded-lg cursor-pointer'
                        >
                            <h2 className='font-bold my-1 text-primary'>Level: {item?.experience_level}</h2>
                            <p>{item?.summary}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Summery;
