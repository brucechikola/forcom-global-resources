import Button from 'components/shared/Button'
import Card from 'components/shared/Card'
import InputField from 'components/shared/InputField'
import Title from 'components/shared/Title'
import React from 'react'
import APITestser from 'api/axios/ApiTester'
export default function AxiosApiTester() {

    const tester = new APITestser()
    const onTest = async (request_type) => {

        let result = ''

        switch (request_type) {

            case 'get':
                result = tester.Get()
                break;
            case 'post':
                result = tester.Post()
                break;
            case 'update':
                result = tester.Update()
                break;
            case 'delete':
                result = tester.Delete()
                break;

            default:
                break;
        }
        const f = await result
        console.log(f)
    }



    return (
        <Card className="w-full h-full mt-5 rouned border border-gray-100 grid grid-cols-2 gap-3 gap-x-5 bg-white rounded-md shadow-default">
            <Title className="col-span-2 text-red-500 text-sm" title="Test different types of API requests" />
            <div className="flex items-end mb-10 justify-between w-full">
                <InputField className="w-[90%] border-indigo-600" placeholder="Result will show here" label="Fetch Test" labelClassName="text-sm text-indigo-700" />
                <Button className="bg-indigo-700 text-white text-sm border-0 hover:bg-indigo-500" onClick={() => onTest('get')}>GET</Button>
            </div>
            <div className="flex items-end mb-10 justify-between w-full">
                <InputField className="w-[90%] border-slate-800" placeholder="Result will show here" label="Post Test" labelClassName="text-sm text-slate-700" />
                <Button className="bg-slate-700 text-white text-sm border-0 hover:bg-slate-600" onClick={() => onTest('post')}>POST</Button>
            </div>
            <div className="flex items-end mb-10 justify-between w-full">
                <InputField className="w-[90%] border-emerald-600" placeholder="Result will show here" label="Update Test" labelClassName="text-sm text-emerald-700" />
                <Button className="bg-emerald-700 text-white text-sm border-0 hover:bg-emerald-500" onClick={() => onTest('update')}>UPDATE</Button>
            </div>
            <div className="flex items-end mb-10 justify-between w-full">
                <InputField className="w-[90%] border-red-600" placeholder="Result will show here" label="Delete Test" labelClassName="text-sm text-red-700" />
                <Button className="bg-red-700 text-white text-sm border-0 hover:bg-red-500" onClick={() => onTest('delete')}>DELETE</Button>
            </div>
        </Card>
    )
}
