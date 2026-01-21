import Carousel from './Carousel';
import LeftSideContent from './LeftSideContent';
import RightSideContent from './RightSideContent';
import Featured from './Featured';
import BottomCentreContent from './BottomCentreContent';

const NewsSection = () => {
    return (
        <div className="bg-gray-50">
            <div className="max-w-350 mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <LeftSideContent />

                    <div className="lg:col-span-6 space-y-6">
                        <Carousel />
                        <Featured />
                        <BottomCentreContent />
                    </div>

                    <RightSideContent />
                </div>
            </div>
        </div>
    );
};

export default NewsSection;