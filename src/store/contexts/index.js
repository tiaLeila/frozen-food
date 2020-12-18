import usePlanContext from './usePlanContext';
import useSelectedMealsContext from './useSelectedMealsContext';
import useSalesPage from './useSalesPage';

export default function useCombinedContexts() {
    const planContext = usePlanContext();
    const selectedMealsContext = useSelectedMealsContext();
    const salesPage = useSalesPage();
    
    return {
        plan: planContext.state,
        planDispatchers: planContext.ActionDispatchers,

        selectedMeals: selectedMealsContext.state,
        selectedMealsDispatchers: selectedMealsContext.ActionDispatchers,       
        
        salesPage: salesPage.state,
        salesPageDispatchers: salesPage.ActionDispatchers,
    }
}