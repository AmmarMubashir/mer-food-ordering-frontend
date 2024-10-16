import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { cuisineList } from "@/config/restaurant-options-config";
import { useFormContext } from "react-hook-form";
import CuisineCheckBox from "./CuisineCheckBox";

const CuisinesSection = () => {
  const { control } = useFormContext();
  return (
    <div className="space-y-2">
      <div className="text-center">
        <h2 className="text-xl font-bold">Cuisines</h2>
        <FormDescription>
          Select the cuisines that your restaurant serves
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="cuisines"
        render={({ field }) => (
          <FormItem>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
              {cuisineList.map((cuisineItem) => (
                <CuisineCheckBox cuisine={cuisineItem} field={field} />
              ))}
            </div>
          </FormItem>
        )}
      />
    </div>
  );
};

export default CuisinesSection;
